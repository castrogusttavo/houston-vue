
<template>
  <Icon :iconName="'package-sent'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PackageSentIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'package-sent'
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
