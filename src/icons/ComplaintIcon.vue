
<template>
  <Icon :iconName="'complaint'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ComplaintIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'complaint'
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
