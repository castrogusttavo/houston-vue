
<template>
  <Icon :iconName="'tiktok'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TiktokIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'tiktok'
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
