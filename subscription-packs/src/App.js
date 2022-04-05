import './App.css';
//import {Button} from 'react-bootstrap';
import Card from './Card';

function App() {
 
let freePlanDetail = { 
  PlanType: "Free",
  CostPerMonth: 0,
  UserType: "Single User", 
  UserCount: 1,
  StorageCapacity: "5GB", 
  Projects: [ { Type: "Unlimited Public Projects", Enabled : true} , { Type: "Unlimited Private Projects", Enabled : false}  ], 
  Access: { Type: "Community Access" , Enabled : true}, 
  PhoneSupport:  { Type: "Dedicated Phone Support", Enabled : false}, 
  Subdomain: { Type: "Free Subdomain", Enabled : false, Unlimited: false}, 
  StatusReports: { Type: "Monthly", Enabled : false }
};

let plusPlanDetail = { 
  PlanType: "Plus",
  CostPerMonth: 9,
  UserType: "5 Users",   
  StorageCapacity: "50GB", 
  Projects: [ { Type: "Unlimited Public Projects", Enabled : true} , { Type: "Unlimited Private Projects", Enabled : true}  ], 
  Access: { Type: "Community Access" , Enabled : true}, 
  PhoneSupport:  { Type: "Dedicated Phone Support", Enabled : true}, 
  Subdomain: { Type: "Free Subdomain", Enabled : true, Unlimited: false}, 
  StatusReports: { Type: "Monthly", Enabled : false }
};

let proPlanDetail = { 
  PlanType: "Pro",
  CostPerMonth: 49,
  UserType: "Unlimited Users",   
  StorageCapacity: "150GB", 
  Projects: [ { Type: "Unlimited Public Projects", Enabled : true} , { Type: "Unlimited Private Projects", Enabled : true}  ], 
  Access: { Type: "Community Access" , Enabled : true}, 
  PhoneSupport:  { Type: "Dedicated Phone Support", Enabled : true}, 
  Subdomain: { Type: "Free Subdomains", Enabled : true, Unlimited: true}, 
  StatusReports: { Type: "Monthly", Enabled : true }
};


return <>
 <section class="pricing py-5">
  <div class="container">
    <div class="row">
      <Card subscribtionType={freePlanDetail} />
      <Card subscribtionType={plusPlanDetail} />
      <Card subscribtionType={proPlanDetail} />
     
      
    </div>
  </div>
</section>
  </>
}

export default App;
