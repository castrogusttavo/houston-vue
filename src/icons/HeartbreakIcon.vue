
<template>
  <Icon :iconName="'heartbreak'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HeartbreakIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'heartbreak'
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
