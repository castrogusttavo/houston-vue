
<template>
  <Icon :iconName="'xml-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Xml01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'xml-01'
    },
    ...Icon.props
  },
  computed: {
    props() {
      return { ...this.$props };
    }
  }
};
</script>
