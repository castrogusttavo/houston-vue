
<template>
  <Icon :iconName="'simcard-dual'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SimcardDualIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'simcard-dual'
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
