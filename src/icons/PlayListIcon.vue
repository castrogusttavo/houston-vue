
<template>
  <Icon :iconName="'play-list'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PlayListIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'play-list'
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
