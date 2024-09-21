
<template>
  <Icon :iconName="'cone-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Cone02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cone-02'
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
