
<template>
  <Icon :iconName="'registered'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RegisteredIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'registered'
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
