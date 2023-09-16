'use client'

import qs from "query-string";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DynamicField } from "@/actions/get-customfields";

interface FilterProps {
  groupedByname: Record<string, DynamicField[]>; // Update the prop type to accept the grouped data
}

const Filter: React.FC<FilterProps> = ({ groupedByname }) => { // Update the prop name
  const searchParams = useSearchParams();
  const router = useRouter();

  const onClick = (name: string, id: string) => {
    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      [name]: id
    };

    if (current[name] === id) {
      query[name] = null;
    }

    const url = qs.stringifyUrl({
      url: window.location.href,
      query,
    }, { skipNull: true });

    router.replace(url);
  }

  return (
    <div>
      {Object.entries(groupedByname).map(([name, data]) => (
        <div key={name} className="mb-8">
          <h3 className="text-lg font-semibold">{name}</h3>
          <hr className="my-4" />
          <div className="flex flex-wrap gap-2">
            {data.map((item) => (
              <div key={item.value} className="flex items-center">
                <Button
                  className={cn(
                    'rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300',
                    searchParams.get(name) === item.value && 'bg-black text-white'
                  )}
                  onClick={() => onClick(name, item.value)}
                >
                  {item.value}
                </Button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Filter;

