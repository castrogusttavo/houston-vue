
<template>
  <Icon :iconName="'droplet'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DropletIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'droplet'
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
