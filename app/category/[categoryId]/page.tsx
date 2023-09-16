

import Container from '@/components/ui/container';
import Billboard from '@/components/ui/billboard';
import ProductCard from '@/components/ui/product-card';
import NoResults from '@/components/ui/no-results';

import getProducts from "@/actions/get-products";
import getCategory from '@/actions/get-category';
import { storeId } from '@/lib/utils';
import getCustomField from '@/actions/get-customfields';
import Filter from './components/filter';
import MobileFilters from './components/mobile-filters';

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  },
  searchParams: any
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams }) => {
  const products = await getProducts({
    categoryId: params.categoryId,
  }, storeId);
  console.log(searchParams)
  const category = await getCategory(params.categoryId, storeId);
  const dynamicFields = await getCustomField(storeId);
  // @ts-ignore
  const flattenedArray = [].concat(...dynamicFields);
  const groupedByname = {} as any;

flattenedArray.forEach(obj => {
  const { name, type, value } = obj;

  if (!groupedByname[name]) {
    groupedByname[name] = [];
  }

  groupedByname[name].push({ name, type, value });
});



  return (
    <div className="bg-white">
      <Container>
        <Billboard
          data={category.billboard}
        />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
        <MobileFilters dynamicFields={groupedByname} />
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
          <div className='hidden md:block'>
                <Filter groupedByname={groupedByname} />
              </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {products
                  .filter((product) => {
                    if (!searchParams.customField) return true;
                    return product.dynamicFields.createMany.data.some((field) => field === searchParams);
                  })
                  .map((item) => (
                    <ProductCard key={item.id} data={item} storeId={storeId} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
