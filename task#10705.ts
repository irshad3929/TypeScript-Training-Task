export {}

function isObject(item: any): item is Record<string, any> {
    return item && typeof item === 'object' && !Array.isArray(item);
  }
  
  function deepMerge(target: Record<string, any>, ...sources: Record<string, any>[]): Record<string, any> {
    if (!sources.length) return target;
  
    for (const source of sources) {
      if (isObject(target) && isObject(source)) {
        for (const key in source) {
          if (isObject(source[key])) {
            if (!target[key]) {
              target[key] = {};
            }
            deepMerge(target[key], source[key]);
          } else {
            target[key] = source[key];
          }
        }
      }
    }
  
    return target;
  }
  
  // Test cases
  const obj1 = { a: 1, b: { c: 2 } };
  const obj2 = { b: { d: 3 }, e: 4 };
  const merged = deepMerge(obj1, obj2);
  
  console.log(merged);  // { a: 1, b: { c: 2, d: 3 }, e: 4 }
  