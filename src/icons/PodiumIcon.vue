
<template>
  <Icon :iconName="'podium'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PodiumIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'podium'
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
