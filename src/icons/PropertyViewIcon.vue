
<template>
  <Icon :iconName="'property-view'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PropertyViewIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'property-view'
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
