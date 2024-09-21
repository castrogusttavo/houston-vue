
<template>
  <Icon :iconName="'add-team'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AddTeamIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'add-team'
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
