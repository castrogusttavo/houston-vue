
<template>
  <Icon :iconName="'software-license'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SoftwareLicenseIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'software-license'
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
