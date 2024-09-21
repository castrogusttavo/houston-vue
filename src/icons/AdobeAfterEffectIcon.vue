
<template>
  <Icon :iconName="'adobe-after-effect'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AdobeAfterEffectIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'adobe-after-effect'
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
