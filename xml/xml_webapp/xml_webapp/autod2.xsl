<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output encoding="UTF-8" method="text" />
    <xsl:template match="/">
		number:<xsl:value-of select="translate(/autod/auto[1]/registrinumber, translate(., '0123456789', ''), '')" />

	</xsl:template>
</xsl:stylesheet>