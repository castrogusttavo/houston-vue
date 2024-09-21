
<template>
  <Icon :iconName="'ramadhan-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Ramadhan02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ramadhan-02'
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
