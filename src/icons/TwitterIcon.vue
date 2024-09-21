
<template>
  <Icon :iconName="'twitter'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TwitterIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'twitter'
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
