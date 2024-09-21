
<template>
  <Icon :iconName="'n-th-root'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'NThRootIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'n-th-root'
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
