
<template>
  <Icon :iconName="'mymind'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MymindIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mymind'
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
