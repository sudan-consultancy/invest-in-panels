import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const AboutTabs = () => {
  return (
    <>
      <Tabs>
        <TabList className="nav nav-tabs md-mt-50">
          <Tab className="nav-link font-slab">Our Story</Tab>
          <Tab className="nav-link font-slab">Our Mission</Tab>
          <Tab className="nav-link font-slab">Our Vision</Tab>
        </TabList>
        {/* End TabList */}

        <div className="tab-content mt-20">
          <TabPanel>
            <p className="font-rubik">
              Being a climate enthusiast we were always intrigued by solar energy. Although while pushing this idea ahead with our Power Plant under Project Livania, in our journey we realised that common people wanted to participate in green energy but they could not due to the high cost factor required for setting up a Power Plant. That is when we came up with an innovative concept of fractional ownership of Power Plant by giving the people a chance to own individual solar panels. Under this ownership of solar panels the participants receive an annual  guaranteed rental income at a lucrative rate of return.


            </p>
            <p className="font-rubik">
              Genesis of Vefes AI = Vefes.AI comes from the house of Vefes, India’s budding renewable energy solutions provider. Founded by and led by Kaustubh Vagal, a first-generation entrepreneur, Vefes.AI has a vast buzzing team of professionals working with one motto i.e. to offer path-breaking participation opportunities in green energy on a single digital platform for Friends of Earth (FoE) with various risk appetites.

            </p>
          </TabPanel>
          <TabPanel>
            <p className="font-rubik">
              Democratising the right to go Renewable.

            </p>
           
          </TabPanel>
          <TabPanel>
            <p className="font-rubik">
              Vefes envisions a future where going renewable is as simple as downloading an app.
Fuelling the above vision through our digital technology empowered Solar Power Park.

            </p>
         
          </TabPanel>
        </div>
        {/* End TabContent */}
      </Tabs>
    </>
  );
};

export default AboutTabs;
