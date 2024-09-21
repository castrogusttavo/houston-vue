
<template>
  <Icon :iconName="'dim-sum-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DimSum02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dim-sum-02'
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
