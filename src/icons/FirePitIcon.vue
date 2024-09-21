
<template>
  <Icon :iconName="'fire-pit'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FirePitIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'fire-pit'
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
