
<template>
  <Icon :iconName="'adobe-illustrator'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AdobeIllustratorIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'adobe-illustrator'
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
