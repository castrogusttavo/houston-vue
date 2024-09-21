
<template>
  <Icon :iconName="'adobe-premier'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AdobePremierIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'adobe-premier'
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
