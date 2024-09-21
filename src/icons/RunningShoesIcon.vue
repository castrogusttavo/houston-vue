
<template>
  <Icon :iconName="'running-shoes'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RunningShoesIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'running-shoes'
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
