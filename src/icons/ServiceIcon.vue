
<template>
  <Icon :iconName="'service'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ServiceIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'service'
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
