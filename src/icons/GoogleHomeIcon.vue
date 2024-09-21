
<template>
  <Icon :iconName="'google-home'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GoogleHomeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'google-home'
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
