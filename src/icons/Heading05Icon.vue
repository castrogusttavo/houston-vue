
<template>
  <Icon :iconName="'heading-05'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Heading05Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'heading-05'
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
