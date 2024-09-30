const mockApiRequest = (...args: unknown[]): Promise<unknown> => {
    return new Promise((resolve) => {
      setTimeout(() => {
          resolve({
            status: 200,
            data: {
              message: "Success",
              mockData: [...args],
            },
          });
      }, 1500);
    });
  };

  export default mockApiRequest