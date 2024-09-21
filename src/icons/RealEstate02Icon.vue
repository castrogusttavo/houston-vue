
<template>
  <Icon :iconName="'real-estate-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RealEstate02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'real-estate-02'
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
