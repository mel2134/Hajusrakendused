<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="html" indent="yes"/>
	<xsl:template name="loetelu">
		<xsl:param name="andmestik" />
		<ul>
			<xsl:for-each select="$andmestik">
				<li>
					<xsl:value-of select="." />
				</li>
			</xsl:for-each>
		</ul>
	</xsl:template>
	
	<xsl:template name="tarn">
		<h1>**************************************************************</h1>
	</xsl:template>
	<xsl:template match="/">
		<h1>Inimeste eesnimede loetelu</h1>
		<xsl:call-template name="loetelu">
			<xsl:with-param name="andmestik" select="inimesed/inimene/eesnimi"/>
		</xsl:call-template>
		<xsl:call-template name="tarn">
			
		</xsl:call-template>
	</xsl:template>
</xsl:stylesheet>
