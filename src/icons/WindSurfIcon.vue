
<template>
  <Icon :iconName="'wind-surf'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WindSurfIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'wind-surf'
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
