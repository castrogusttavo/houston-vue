
<template>
  <Icon :iconName="'software'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SoftwareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'software'
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
