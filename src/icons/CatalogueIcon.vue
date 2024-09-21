
<template>
  <Icon :iconName="'catalogue'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CatalogueIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'catalogue'
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
