
<template>
  <Icon :iconName="'property-new'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PropertyNewIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'property-new'
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
