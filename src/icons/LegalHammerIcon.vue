
<template>
  <Icon :iconName="'legal-hammer'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LegalHammerIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'legal-hammer'
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
