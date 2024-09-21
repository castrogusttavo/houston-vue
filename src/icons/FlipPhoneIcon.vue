
<template>
  <Icon :iconName="'flip-phone'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FlipPhoneIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'flip-phone'
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
