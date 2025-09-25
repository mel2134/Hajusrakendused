<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="sugupuu.aspx.cs" Inherits="xml_webapp.sugupuu_ylesanne.sugupuu" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <asp:Xml ID="xml1" runat="server" DocumentSource="~/sugupuu_ylesanne/sugupuu.xml" TransformSource="~/sugupuu_ylesanne/koikide_synni_aastad.xslt"></asp:Xml>
        </div>
        <div>
            <asp:Xml ID="xml2" runat="server" DocumentSource="~/sugupuu_ylesanne/sugupuu.xml" TransformSource="~/sugupuu_ylesanne/kaks_last.xslt"></asp:Xml>
        </div>
        <div>
            <asp:Xml ID="xml3" runat="server" DocumentSource="~/sugupuu_ylesanne/sugupuu.xml" TransformSource="~/sugupuu_ylesanne/tabelina.xslt"></asp:Xml>
        </div>
        <div>
            <asp:Xml ID="xml4" runat="server" DocumentSource="~/sugupuu_ylesanne/sugupuu.xml" TransformSource="~/sugupuu_ylesanne/lapsed.xslt"></asp:Xml>
        </div>
        <div>
            <asp:Xml ID="xml5" runat="server" DocumentSource="~/sugupuu_ylesanne/sugupuu.xml" TransformSource="~/sugupuu_ylesanne/vanem_synni_ajal.xslt"></asp:Xml>
        </div>
    </form>
</body>
</html>
