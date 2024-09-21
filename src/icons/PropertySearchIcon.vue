
<template>
  <Icon :iconName="'property-search'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PropertySearchIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'property-search'
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
