export const ProjectCard: React.FC<React.ComponentProps<'div'>> = (props) => {
  return (
    <div className="container bg-blue-300  p-5" {...props}>
      <h1 className="text-4xl">Project Name</h1>

      <div className="mt-4 w-full">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum a consequatur atque ab modi voluptatum
          praesentium temporibus accusamus saepe facere sequi, impedit fuga at deleniti, tempore quam necessitatibus
          recusandae nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quas quae dolorum aperiam
          consequatur provident fugit officiis itaque! Tempore illum deleniti eaque similique harum eos perspiciatis ut
          voluptates optio dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsum rerum
          repudiandae amet velit, nisi cum laboriosam dicta doloribus, asperiores eius, voluptate perspiciatis
          voluptates doloremque mollitia! Sed architecto eos velit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum a consequatur atque ab modi voluptatum
          praesentium temporibus accusamus saepe facere sequi, impedit fuga at deleniti, tempore quam necessitatibus
          recusandae nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quas quae dolorum aperiam
          consequatur provident fugit officiis itaque! Tempore illum deleniti eaque similique harum eos perspiciatis ut
          voluptates optio dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsum rerum
          repudiandae amet velit, nisi cum laboriosam dicta doloribus, asperiores eius, voluptate perspiciatis
          voluptates doloremque mollitia! Sed architecto eos velit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum a consequatur atque ab modi voluptatum
          praesentium temporibus accusamus saepe facere sequi, impedit fuga at deleniti, tempore quam necessitatibus
          recusandae nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quas quae dolorum aperiam
          consequatur provident fugit officiis itaque! Tempore illum deleniti eaque similique harum eos perspiciatis ut
          voluptates optio dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsum rerum
          repudiandae amet velit, nisi cum laboriosam dicta doloribus, asperiores eius, voluptate perspiciatis
          voluptates doloremque mollitia! Sed architecto eos velit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum a consequatur atque ab modi voluptatum
          praesentium temporibus accusamus saepe facere sequi, impedit fuga at deleniti, tempore quam necessitatibus
          recusandae nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quas quae dolorum aperiam
          consequatur provident fugit officiis itaque! Tempore illum deleniti eaque similique harum eos perspiciatis ut
          voluptates optio dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsum rerum
          repudiandae amet velit, nisi cum laboriosam dicta doloribus, asperiores eius, voluptate perspiciatis
          voluptates doloremque mollitia! Sed architecto eos velit.
        </p>
      </div>

      <ul className="grid grid-flow-col grid-rows-1 mt-3">
        <li>Typescript</li>
        <li>Kubernetes</li>
        <li>Docker</li>
        <li>Python</li>
      </ul>
    </div>
  );
};
