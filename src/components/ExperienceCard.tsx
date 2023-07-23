export const ExperienceCard: React.FC<React.ComponentProps<'div'>> = (props) => {
  return (
    <div className="rounded-lg border-2 border-black p-4" {...props}>
      <h1 className="text-4xl">Job Name</h1>

      <div className="mt-4">
        <ul>
          <li>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum a consequatur atque ab modi voluptatum
              praesentium temporibus accusamus saepe facere sequi, impedit fuga at deleniti, tempore quam necessitatibus
              recusandae nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quas quae dolorum
              aperiam consequatur provident fugit officiis itaque! Tempore illum deleniti eaque similique harum eos
              perspiciatis ut voluptates optio dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              ipsum rerum repudiandae amet velit, nisi cum laboriosam dicta doloribus, asperiores eius, voluptate
              perspiciatis voluptates doloremque mollitia! Sed architecto eos velit.
            </p>
          </li>
          <li>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum a consequatur atque ab modi voluptatum
              praesentium temporibus accusamus saepe facere sequi, impedit fuga at deleniti, tempore quam necessitatibus
              recusandae nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quas quae dolorum
              aperiam consequatur provident fugit officiis itaque! Tempore illum deleniti eaque similique harum eos
              perspiciatis ut voluptates optio dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              ipsum rerum repudiandae amet velit, nisi cum laboriosam dicta doloribus, asperiores eius, voluptate
              perspiciatis voluptates doloremque mollitia! Sed architecto eos velit.
            </p>
          </li>
          <li>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum a consequatur atque ab modi voluptatum
              praesentium temporibus accusamus saepe facere sequi, impedit fuga at deleniti, tempore quam necessitatibus
              recusandae nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quas quae dolorum
              aperiam consequatur provident fugit officiis itaque! Tempore illum deleniti eaque similique harum eos
              perspiciatis ut voluptates optio dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              ipsum rerum repudiandae amet velit, nisi cum laboriosam dicta doloribus, asperiores eius, voluptate
              perspiciatis voluptates doloremque mollitia! Sed architecto eos velit.
            </p>
          </li>
          <li>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum a consequatur atque ab modi voluptatum
              praesentium temporibus accusamus saepe facere sequi, impedit fuga at deleniti, tempore quam necessitatibus
              recusandae nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quas quae dolorum
              aperiam consequatur provident fugit officiis itaque! Tempore illum deleniti eaque similique harum eos
              perspiciatis ut voluptates optio dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              ipsum rerum repudiandae amet velit, nisi cum laboriosam dicta doloribus, asperiores eius, voluptate
              perspiciatis voluptates doloremque mollitia! Sed architecto eos velit.
            </p>
          </li>
        </ul>
      </div>

      <ul className="mt-3 grid grid-flow-col grid-rows-1">
        <li>Typescript</li>
        <li>Kubernetes</li>
        <li>Docker</li>
        <li>Python</li>
      </ul>
    </div>
  );
};
