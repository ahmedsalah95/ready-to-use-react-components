import Link from "./Link";



function Sidebar(){

    const allLinks =[ 
        {'label':'Accordion','to':'/accordion'},
        {'label':'dropdown','to':'/dropdown'},
        {'label':'button','to':'/button'},
        {'label':'modal','to':'/modal'}

    ];

    const renderedlinks = allLinks.map((link)=>{
        return <Link key={link.to} to={link.to}>{link.label}</Link>
    });


return(
    <div className="sticky top-0 overflow-y-scroll flex flex-col">
    {renderedlinks}
    </div>
);

}


export default Sidebar;