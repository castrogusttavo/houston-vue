
<template>
  <Icon :iconName="'plant-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Plant02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'plant-02'
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
