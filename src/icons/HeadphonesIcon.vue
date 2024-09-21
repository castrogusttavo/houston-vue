
<template>
  <Icon :iconName="'headphones'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HeadphonesIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'headphones'
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
