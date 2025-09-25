<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="autod.aspx.cs" Inherits="xml_webapp.WebForm2" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <asp:Xml ID="xml4" runat="server" DocumentSource="~/autod.xml" TransformSource="~/autod.xsl"></asp:Xml>
        </div>
        <div>
            <asp:Xml ID="xml5" runat="server" DocumentSource="~/autod.xml" TransformSource="~/autod2.xsl"></asp:Xml>
        </div>
        <div>
            <asp:Xml ID="xml6" runat="server" DocumentSource="~/autod.xml" TransformSource="~/autod3.xsl"></asp:Xml>
        </div>
        <div>
            <asp:Xml ID="xml77" runat="server" DocumentSource="~/autod.xml" TransformSource="~/autod4.xsl"></asp:Xml>
        </div>
        <div>
            <asp:Xml ID="xml123" runat="server" DocumentSource="~/autod.xml" TransformSource="~/autod5.xsl"></asp:Xml>
        </div>
        <div>
            <asp:Xml ID="xml1223" runat="server" DocumentSource="~/autod.xml" TransformSource="~/autod6.xsl"></asp:Xml>
        </div>
        <div>
            <asp:Xml ID="xml12223" runat="server" DocumentSource="~/autod.xml" TransformSource="~/autod7.xsl"></asp:Xml>
        </div>
        <div>
            <asp:Xml ID="xml122223" runat="server" DocumentSource="~/autod.xml" TransformSource="~/universaalne.xslt"></asp:Xml>
        </div>
        <div>
            <asp:Xml ID="xml1" runat="server" DocumentSource="~/autod.xml" TransformSource="~/universaalne_tabe.xslt"></asp:Xml>
        </div>
        <div>
            <asp:Xml ID="xml2221" runat="server" DocumentSource="~/autod.xml" TransformSource="~/loetelu.xslt"></asp:Xml>
        </div>
        
        
        <div>
            <asp:Xml ID="xml12123123123" runat="server" DocumentSource="~/autod.xml" TransformSource="~/komaga.xslt"></asp:Xml>
        </div>
        
        
        <div>
            <asp:Xml ID="xml1123" runat="server" DocumentSource="~/autod.xml" TransformSource="~/sql.xslt"></asp:Xml>
        </div>
    </form>
</body>
</html>
