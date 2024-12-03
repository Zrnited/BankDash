import { TiHome, TiChartBar } from "react-icons/ti"
import { FaFileInvoiceDollar, FaCreditCard, FaHandHoldingDollar } from "react-icons/fa6"
import { FaUser } from "react-icons/fa"
import { SiGooglecloudspanner } from "react-icons/si"
import { IoIosSettings } from "react-icons/io"
import { ReactNode } from "react"

interface LinkROutes {
    linkName: string;
    linkRoute: string;
    icon: ReactNode;
    iconNotActive: ReactNode;
}

const LinkRoutes: LinkROutes[] = [
    {
        linkName: "dashboard",
        linkRoute: "/dashboard",
        icon: <TiHome color="#2D60FF" size={25} />,
        iconNotActive: <TiHome color="#B1B1B1" size={25} />
    },
    {
        linkName: "transactions",
        linkRoute: "/dashboard/transactions",
        icon: <FaFileInvoiceDollar color="#2D60FF" size={25} />,
        iconNotActive: <FaFileInvoiceDollar color="#B1B1B1" size={25} />
    },
    {
        linkName: "accounts",
        linkRoute: "/dashboard/accounts",
        icon: <FaUser color="#2D60FF" size={25} />,
        iconNotActive: <FaUser color="#B1B1B1" size={25} />
    },
    {
        linkName: "investments",
        linkRoute: "/dashboard/investments",
        icon: <TiChartBar color="#2D60FF" size={25} />,
        iconNotActive: <TiChartBar color="#B1B1B1" size={25} />
    },
    {
        linkName: "credit cards",
        linkRoute: "/dashboard/creditcards",
        icon: <FaCreditCard color="#2D60FF" size={25} />,
        iconNotActive: <FaCreditCard color="#B1B1B1" size={25} />
    },
    {
        linkName: "loans",
        linkRoute: "/dashboard/loans",
        icon: <FaHandHoldingDollar color="#2D60FF" size={25} />,
        iconNotActive: <FaHandHoldingDollar color="#B1B1B1" size={25} />
    },
    {
        linkName: "services",
        linkRoute: "/dashboard/services",
        icon: <SiGooglecloudspanner color="#2D60FF" size={25} />,
        iconNotActive: <SiGooglecloudspanner color="#B1B1B1" size={25} />
    },
    {
        linkName: "setting",
        linkRoute: "/dashboard/setting",
        icon: <IoIosSettings color="#B1B1B1" size={25} />,
        iconNotActive: <IoIosSettings color="#B1B1B1" size={25} />
    }
]

export { LinkRoutes }