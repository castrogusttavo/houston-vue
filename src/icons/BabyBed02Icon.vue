
<template>
  <Icon :iconName="'baby-bed-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BabyBed02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'baby-bed-02'
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
