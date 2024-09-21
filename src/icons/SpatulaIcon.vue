
<template>
  <Icon :iconName="'spatula'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SpatulaIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'spatula'
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
