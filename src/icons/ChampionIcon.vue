
<template>
  <Icon :iconName="'champion'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ChampionIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'champion'
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
